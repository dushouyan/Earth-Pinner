class PlaceReview < ApplicationRecord
	belongs_to :places 
	belongs_to :users 
end
