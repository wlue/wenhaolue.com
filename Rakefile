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

desc "Deploy to production."
task :deploy => :generate do
  system 'aws s3 sync _site/ s3://wenhaolue.com'
  system 'aws cloudfront create-invalidation --distribution-id EEL1QG1SHQTQC --paths "/*"'
end
