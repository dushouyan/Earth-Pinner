class AddColumnToPlaces < ActiveRecord::Migration[5.0]
  def change
    add_column :places, :url, :string
    add_column :places, :address, :string 
    add_column :places, :created_by, :string
    add_column :places, :make_id, :integer 
    add_column :places, :approved, :boolean
    add_column :places, :website, :string
    add_column :places, :admission, :string
    add_column :places, :description, :text
    add_column :places, :arrive, :text
  end
end
