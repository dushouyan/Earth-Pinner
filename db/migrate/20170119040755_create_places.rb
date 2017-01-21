class CreatePlaces < ActiveRecord::Migration[5.0]
  def change
    create_table :places do |t|
      t.string :name
      t.string :city
      t.string :closest_city
      t.string :country
      t.string :website

      t.timestamps
    end
  end
end
