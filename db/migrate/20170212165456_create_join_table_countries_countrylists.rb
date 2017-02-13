class CreateJoinTableCountriesCountrylists < ActiveRecord::Migration[5.0]
  def change
    create_join_table :countries, :countrylists do |t|
      t.index [:country_id, :countrylist_id]
      t.index [:countrylist_id, :country_id]
    end
  end
end
