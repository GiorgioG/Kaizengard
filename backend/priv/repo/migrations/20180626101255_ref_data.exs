defmodule ApiServer.Repo.Migrations.RefData do
  use Ecto.Migration

  def change do
    create table(:language) do
      add :name, :string, null: false, size: 64
      add :display_name, :string, null: false, size: 64
      timestamps()
    end
    create unique_index(:language, [:name])

    create table(:tag) do
      add :name, :string, null: false, size: 64
      add :display_name, :string, null: false, size: 64
      timestamps()
    end

    create unique_index(:tag, [:name])


    create table(:post) do
      add :title, :string, null: false, size: 64
      add :created_by_user_id, references(:user), null: false
      add :active, :boolean, null: false, default: true
      timestamps()
    end

    create table(:post_code) do
      add :post_id, references(:post), null: false
      add :language_id, references(:language), null: false
      add :created_by_user_id, references(:user), null: false
      add :description, :text
      add :code, :text, null: false
      timestamps()
    end

    create table(:post_tag) do
      add :post_id, references(:post), null: false
      add :tag_id, references(:tag), null: false
      timestamps()
    end

    create table(:post_vote) do
      add :post_id, references(:post), null: false
      add :vote_value, :integer, null: false
      add :created_by_user_id, references(:user), null: false
      timestamps()
    end
    create unique_index(:post_vote, [:post_id, :created_by_user_id])


    create table(:post_code_comment) do
      add :post_id, references(:post)
      add :comment, :text, null: false
      timestamps()
    end


  end
end
