class Place < ApplicationRecord 
	has_and_belongs_to_many :dreams 
	has_many :reviews

	before_validation :pretty_url

	def pretty_url
		self.url = self.name.strip.downcase.gsub(' ','-')
	end
end
