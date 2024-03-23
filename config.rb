# Require any additional compass plugins here.
require "susy"

# Fix Compass issues in Ruby >=3.2
# Monkeypatch the File Class with the exists? method
unless Dir.respond_to?(:exists?)
  class << Dir
    alias_method :exists?, :exist?
  end
end

# Monkeypatch the Dir Class with the exists? method
unless File.respond_to?(:exists?)
  class << File
    alias_method :exists?, :exist?
  end
end

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "assets/css"
sass_dir = "_assets/sass"
images_dir = "assets/img"
javascripts_dir = "assets/js"

# You can select your preferred output style here (can be overridden via the command line):
output_style = :compress

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

