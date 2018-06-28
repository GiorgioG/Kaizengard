defmodule ApiServer.Schema do
  use Ecto.Schema

  schema "posts" do
    field :title, :string
    field :active, :boolean
    timestamps()
  end

end
