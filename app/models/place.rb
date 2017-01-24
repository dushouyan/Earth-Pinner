class Place < ApplicationRecord 
	has_and_belongs_to_many :dreams 
	has_many :experiences

	validates :name, presence: true, uniqueness: true
	validates :address, presence: true
	validates :country, presence: true
	has_attached_file :avatar, styles: { thumb: "200x200>" }
	validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

	before_validation :pretty_url

	def pretty_url
		self.url = self.name.strip.downcase.gsub(' ','-')
	end

 
	geocoded_by :address	
	after_validation :geocode   

	def self.search(search)
  		where("name LIKE ? OR address LIKE ? OR country LIKE ?", "%#{search}%", "%#{search}%", "%#{search}%",) 
	end


end
