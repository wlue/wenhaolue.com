task :default => :generate

desc "Clean the generated site."
task :clean do
  system 'rm -rf _site'
end

desc "Generate the website once."
task :generate => :clean do
  system 'bundle exec compass compile -c config.rb --force'
  system 'bundle exec jekyll build'
end

desc "Deploy to development."
task :deploy_dev => :generate do
  system 'rsync -rtzh --progress --delete _site/ nimbus:/var/www/dev.wenhaolue.com/public/'
end
