class AddColumnToPlaces < ActiveRecord::Migration[5.0]
  def change
    add_column :places, :url, :string
    add_column :places, :address, :string
    add_column :places, :state, :string 
    add_column :places, :created_by, :string 
  end
end
