class PixijsController < ApplicationController
  def index
  end
  def test
  end
  def loadpoint
    render json: {"user":"aaaa","data":{"key":"value"}}
  end

  def savepoint
    render json: {"user":"aaaa","status":"OK"}
  end
end
