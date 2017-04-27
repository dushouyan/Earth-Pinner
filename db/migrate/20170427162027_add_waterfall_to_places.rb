class AddWaterfallToPlaces < ActiveRecord::Migration[5.0]
  def change
    add_column :places, :waterfall, :boolean
  end
end
