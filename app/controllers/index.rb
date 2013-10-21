get '/' do
  # Look in app/views/index.erb
  erb :index
end


post '/note' do
  new_note = Note.create(description: params[:create_note])
  puts new_note
  
  redirect('/')

end
