class Place < ApplicationRecord 
	has_and_belongs_to_many :dreams 
	has_many :reviews

	before_validation :pretty_url

	def pretty_url
		self.url = self.name.strip.downcase.gsub(' ','-')
	end

	def full_street_address
		[address, city, state, country].compact.join(', ')
	end
 
	geocoded_by :full_street_address
	after_validation :geocode   

end
