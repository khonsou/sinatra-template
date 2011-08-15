# encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'haml'
require File.dirname(__FILE__)+'/helper'
require File.dirname(__FILE__)+'/main'

set :environemt, :production

get '/' do

  @title = @@conf['title']
  haml :index

end

get '/omikuji.json' do

  content_type = 'application/json'

  arr = ['a', 'b', 'c', 'd', 'e']

  {
    :result => arr.sample,
    :time => Time.now.to_s
  }.to_json
end
