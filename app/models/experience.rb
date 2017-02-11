class Experience < ApplicationRecord
	belongs_to :user
	belongs_to :place
	validates :review, presence: true, length: { maximum: 4000 } #add lengths 
	validates :rating, numericality: { :greater_than_or_equal_to => 1, :less_than_or_equal_to => 5 }
end
