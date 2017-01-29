class User < ApplicationRecord
	has_one :dream 
  has_one :make 
	has_many :experiences, -> { distinct }

 def self.from_omniauth(auth)
  where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
        if user.save
          Dream.create(user_id: user.id)
          Make.create(user_id: user.id)
        end
    end
  end

end
