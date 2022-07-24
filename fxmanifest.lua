<<<<<<< HEAD
fx_version "cerulean"
game "gta5"
description 'js runtime monkaW'
authors { "itschip",  "erik-sn", "TasoOneAsia", "kidz", "RockySouthpaw"}
version '1.2.99'

client_scripts {
    'resources/dist/client/client.js',
    'resources/client/*.lua'
}

server_script {
    -- This is a file that lives purely in source code and isn't compiled alongside
    -- rest of the release. It's used to detect whether a user can read or not.
    'build-detector.js',
    'resources/dist/server/server.js'
}

ui_page 'resources/html/index.html'

files {
    'config.json',
    'resources/html/index.html',
    'resources/html/**/*',
}

dependency {
	'screenshot-basic',
  'pma-voice'
}
=======
fx_version "cerulean"
game "gta5"
description 'js runtime monkaW'
authors { "itschip",  "erik-sn", "TasoOneAsia", "kidz", "RockySouthpaw"}
version '1.3.3'

client_scripts {
    'resources/dist/client/client.js',
    'resources/client/*.lua'
}

server_script {
    -- This is a file that lives purely in source code and isn't compiled alongside
    -- rest of the release. It's used to detect whether a user can read or not.
    'build-detector.js',
    'resources/dist/server/server.js'
}

ui_page 'resources/html/index.html'

files {
    'config.json',
    'resources/html/index.html',
    'resources/html/**/*',
}

dependency {
	'screenshot-basic',
  'pma-voice'
}
>>>>>>> c87ea2f8f34a7577ef4deb39be53c4f7fceb90d9
