fx_version "cerulean"
description "Basic React + Lua boilerplate for FiveM"
author "rk7474"
version '1.0.0'
repository 'https://github.com/rk-7474/react-boilerplate-fivem'

lua54 'yes'

game "gta5"

ui_page 'web/build/index.html'

client_script "client/**/*"
server_script "server/**/*"

files {
	'web/build/index.html',
	'web/build/**/*',
}