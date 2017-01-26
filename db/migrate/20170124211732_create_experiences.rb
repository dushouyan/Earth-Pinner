class CreateExperiences < ActiveRecord::Migration[5.0]
  def change
    create_table :experiences do |t|
      t.integer :user_id
      t.integer :place_id
      t.string :user_name 
      t.text  :review

      t.timestamps
    end
  end
end
