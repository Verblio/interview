class Api::TestController < ApplicationController
  def index
    render json: { msg: 'api test success!' }
  end
end