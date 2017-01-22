class Place < ApplicationRecord 
	has_and_belongs_to_many :dreams 
	has_many :reviews

end
