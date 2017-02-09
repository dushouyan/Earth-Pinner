class Country < ApplicationRecord
	has_many :places

	before_validation :pretty_url
	
	def pretty_url
		self.url = self.name.strip.downcase.gsub(' ','-')
	end

end

