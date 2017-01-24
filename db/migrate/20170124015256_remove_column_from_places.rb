class RemoveColumnFromPlaces < ActiveRecord::Migration[5.0]
  def change
  	remove_column :places, :city, :string
    remove_column :places, :closest_city, :string
  end
end
