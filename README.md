doc.pidconsortium.eu
====================

### Prerequisites
Install Ruby and nanoc on the machine you want to view the documentation. For more information please visit [Installation Process] (http://nanoc.ws/install/#instructions-for-the-impatient)

### Gemfile
Several features of nanoc rely on optional dependencies. For example, the view option requires the adsf package. This Gemfile specifies the dependencies used for this project:

```bash
source "http://rubygems.org"

ruby '1.9.3'

gem 'builder'
gem 'coderay'
gem 'kramdown', '~> 0.13.2'
gem 'mime-types', '~> 1.16'
gem 'nanoc', '~> 3.4.3'
gem 'nokogiri', '~> 1.5.10'
gem 'pygments.rb', '~> 0.3.7'

gem 'thin'
gem 'yajl-ruby', '~> 1.1.0'
gem 'systemu'

group :development do
  gem 'adsf'
  gem 'fssm'
end
```

Once you have created the Gemfile with these contents, use Bundler to ensure that all of these dependencies are installed. Run the standard install command:

```bash
% bundle install 
```

### Commands


Compile 
```bash
% nanoc
```

View 
```bash
% nanoc view
```
