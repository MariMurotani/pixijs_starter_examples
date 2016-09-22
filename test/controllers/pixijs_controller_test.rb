require 'test_helper'

class PixijsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pixijs_index_url
    assert_response :success
  end

  test "should get loadpoint" do
    get pixijs_loadpoint_url
    assert_response :success
  end

  test "should get savepoint" do
    get pixijs_savepoint_url
    assert_response :success
  end

end
