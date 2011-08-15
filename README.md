update this to ruby 1.9.x

now can work for windows user.

Sinatra Template (Omikuji)
==========================
Sinatra+Haml+jQuery App Template.


Clone
-----

    % git clone git://github.com/shokai/sinatra-template.git
    % cd sinatra-template


Install Dependencies
--------------------

    % gem install sinatra thin sinatra-reloader json haml bundler

    for windows user, thin can not work very well. skip thin. sinatra will use WEBrick come from ruby.
    % gem install sinatra sinatra-reloader json haml bundler



or


    % gem install bundler
    % bundle install
    

Run
---

    % ruby development.ru

open [http://localhost:8080](http://localhost:8080)


Deploy
------
use Passenger with "config.ru"
