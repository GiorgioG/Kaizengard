module QueryProcessor
open FSharp.Data.Sql
let [<Literal>] connectionString = "Server=127.0.0.1;Port=5432;Database=cw;User Id=postgres;Password=vaillant;"
let [<Literal>] resPath = __SOURCE_DIRECTORY__ + @"../../packages"

type sql = SqlDataProvider<Common.DatabaseProviderTypes.POSTGRESQL, connectionString, "", resPath,1000,true >

type PostQueryPlan =
| NewestPosts
| PopularPosts
| PostById of id : string

type QueryPlanType = 
| PostQueryPlan of PostQueryPlan


type QueryPlan = {
    Type : QueryPlanType;
}
    
type CodeItem = {
    code: string
    language: string 
}

type PostListItem = {
    id : string
    title: string
    description: string
    code: CodeItem list
    tags: string list option
    commentCount: bigint
    viewCount: bigint
    responseCount: bigint
}

let mapToPostCodeItem(codeItem:sql.dataContext.``public.post_code_itemEntity``) : CodeItem =
    {
        code = codeItem.Code
        language = codeItem.la
    }

let mapToPostListItem(post:sql.dataContext.``public.postEntity``, codeItems:sql.dataContext.``public.post_code_itemEntity`` list, hashIdGenerator) : PostListItem = 
    {
        id = hashIdGenerator(post.Id)
        title = post.Title
        description = post.Description
        code = List.map mapToPostCodeItem codeItems
        tags
    }

let execute queryPlan dbConnFactory hashIdGenerator =
        
    let ctx = sql.GetDataContext()
    match queryPlan.Type with
            | PostQueryPlan p -> 
                match  p with
                    | NewestPosts -> 
                        let ctx = sql.GetDataContext()
                        let data = query {
                            for post in ctx.Public.Post do
                            join item in ctx.Public.PostCodeItem on (item.PostId = post.Id)
                            for tags in ``ctx.public.Tag by TagId`` do

                            sortByDescending(post.DateCreated)
                            take(12)
                            select (post,item, tags)
                        } 
                        mapToPostListItem data 
                        
                    | PopularPosts -> None
                    | PostById qp -> None
                    | _ -> None
