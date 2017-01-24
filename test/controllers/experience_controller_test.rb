require 'test_helper'

class ExperienceControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get experience_index_url
    assert_response :success
  end

  test "should get new" do
    get experience_new_url
    assert_response :success
  end

  test "should get create" do
    get experience_create_url
    assert_response :success
  end

  test "should get destroy" do
    get experience_destroy_url
    assert_response :success
  end

end
