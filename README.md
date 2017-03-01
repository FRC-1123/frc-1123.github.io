This is AIM Robotics' (FRC Team 1123) team website, written with Jekyll and Materialize.


Updating Members
----------------
Member information is located in the `current_members.yml` and `past_members.yml` YAML data files (under `_data/`).
YAML is pretty self-explanatory so it shouldn't be very hard to figure out the format.


Contributing
============

Requirements
------------
* GNU/Linux, Unix, or macOS
* [Ruby](https://www.ruby-lang.org/en/downloads/) version 2.0 or above, including all development headers
* [RubyGems](https://rubygems.org/pages/download)
* [GCC](https://gcc.gnu.org/install/) and [Make](https://www.gnu.org/software/make/)

Local Setup
-----------
Install Jekyll and Bundler by running `gem install jekyll bundler`. Then `cd` into the root of the repository and run
`bundle install`. To start a local development server on port 4000, run `jekyll serve`, or run `jekyll serve -I` to
allow incremental builds. See the [Jekyll documentation](https://jekyllrb.com/docs/home/) for more details.

Creating Posts
--------------
The `jekyll-admin` plugin, which is installed when you run `bundle install`, allows you to make posts very easily
through a browser. With a development server running, go to `localhost:4000/admin` to access the admin interface.
Go to "Posts" and press "New Post". After writing your post, scroll to the bottom and add the following metadata fields:

* author
* tags (optional)

If you want to add tags to your post, make sure to press "Convert to List" under the dropdown menu.

Contributing to the Website
---------------------------
Fork the repository, make whatever changes you'd like, and submit a pull request. Please make sure that the website
remains responsive (i.e. fast and mobile-friendly)! :)

------
Questions, comments, or feature requests? Email me at [czhao39@gmail.com](mailto:czhao39@gmail.com).