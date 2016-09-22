Rails.application.routes.draw do
  get 'pixijs/index'

  get 'pixijs/loadpoint'

  post 'pixijs/savepoint'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
