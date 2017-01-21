class CreateDreams < ActiveRecord::Migration[5.0]
  def change
    create_table :dreams do |t|
      t.integer :user_id
      t.integer :place_id

      t.timestamps
    end
  end
end
