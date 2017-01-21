class CreatePlaceReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :place_reviews do |t|
      t.integer :user_id
      t.integer :place_id
      t.text :review

      t.timestamps
    end
  end
end
