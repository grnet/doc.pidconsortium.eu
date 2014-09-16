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

###Structure

The documentation has the following files and directories:

 *  **content/**
    contains the uncompiled items
 *  **layouts/**
    contains the layouts
 *  **lib/**
    contains custom site-specific code (filters, helpers, …)
 *  **static/**
    contains static files (images, css)
 *  **Rules**
    contains compilation, routing and layouting rules

You have to add the config file as described in the next section. 

 *  **config.yaml** 
    contains the site configuration

These will be created after compilation 
 *  **output/**
    contains the compiled site
 *  **tmp/**
    contains data used for speeding up compilation (can be safely emptied)

### Config.yaml 

```bash
encoding: utf-8
# A list of file extensions that nanoc will consider to be textual rather than
# binary. If an item with an extension not in this list is found,  the file
# will be considered as binary.
text_extensions: [ 'css', 'erb', 'haml', 'htm', 'html', 'js', 'less', 'markdown', 'md', 'php', 'rb', 'sass', 'scss', 'txt', 'xhtml', 'xml', 'atom' ]

# The path to the directory where all generated files will be written to. This
# can be an absolute path starting with a slash, but it can also be path
# relative to the site directory.
output_dir: output

# A list of index filenames, i.e. names of files that will be served by a web
# server when a directory is requested. Usually, index files are named
# “index.hml”, but depending on the web server, this may be something else,
# such as “default.htm”. This list is used by nanoc to generate pretty URLs.
index_filenames: [ 'index.html' ]

# Whether or not to generate a diff of the compiled content when compiling a
# site. The diff will contain the differences between the compiled content
# before and after the last site compilation.
enable_output_diff: false

# The data sources where nanoc loads its data from. This is an array of
# hashes; each array element represents a single data source. By default,
# there is only a single data source that reads data from the “content/” and
# “layout/” directories in the site directory.
data_sources:
  -
    # The type is the identifier of the data source. By default, this will be
    # `filesystem_unified`.
    type: filesystem_unified

    # The path where items should be mounted (comparable to mount points in
    # Unix-like systems). This is “/” by default, meaning that items will have
    # “/” prefixed to their identifiers. If the items root were “/en/”
    # instead, an item at content/about.html would have an identifier of
    # “/en/about/” instead of just “/about/”.
    items_root: /

    # The path where layouts should be mounted. The layouts root behaves the
    # same as the items root, but applies to layouts rather than items.
    layouts_root: /

  -
    type: static
    items_root: /static

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
[More Information about nanoc commands] (http://nanoc.ws/docs/basics/)
