defmodule ApiServer.Repo.Migrations.Users do
  use Ecto.Migration

  def change do
    create table(:user) do
      add :username, :string, null: false, size: 32
      add :email, :string, null: false, size: 128
      timestamps()
      end

    create unique_index(:user, [:email])
    create unique_index(:user, [:username])

  end
end