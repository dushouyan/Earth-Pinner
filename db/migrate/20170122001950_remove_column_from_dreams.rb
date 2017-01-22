class RemoveColumnFromDreams < ActiveRecord::Migration[5.0]
  def change
    remove_column :dreams, :place_id, :integer
  end
end
