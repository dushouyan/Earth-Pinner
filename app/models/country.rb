class Country < ApplicationRecord
	has_many :places
	has_and_belongs_to_many :countrylists
	before_validation :pretty_url

	has_attached_file :avatar, styles: { thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  	validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
	
	def pretty_url
		self.url = self.name.strip.downcase.gsub(' ','-')
	end

end

