module QueryProcessor
open Npgsql
open System.Data

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
        sdks: string list
    }

    type PostListItem = {
        id : string
        title: string
        description: string
        code: CodeItem list
        tags: string list
        commentCount: bigint
        viewCount: bigint
        responseCount: bigint
    }

    let execute queryPlan dbConnFactory =
        match queryPlan.Type with
                | PostQueryPlan p -> 
                    match  p with
                        | NewestPosts -> 
                            use dbConn: IDbConnection = dbConnFactory()
                            use cmd = dbConn.CreateCommand()
                            cmd.CommandText <- "select * from post order by date_created desc LIMIT 12"

                            dbConn.Open()
                            
                            [ use reader = cmd.ExecuteReader()
                            while reader.Read() do  
                                yield {} ]
                        | PopularPosts qp -> None
                        | PostById qp -> None
                        | _ -> None
