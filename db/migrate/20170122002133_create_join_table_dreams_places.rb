class CreateJoinTableDreamsPlaces < ActiveRecord::Migration[5.0]
  def change
    create_join_table :places, :dreams do |t|
      t.index [:place_id, :dream_id]
      t.index [:dream_id, :place_id]
    end
  end
end
