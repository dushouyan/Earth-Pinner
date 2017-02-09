class CreatePlaces < ActiveRecord::Migration[5.0]
  def change
    create_table :places do |t|
      t.string :name
      t.string :city
      t.string :closest_city
      t.integer :country_id
      t.timestamps
    end
  end
end
