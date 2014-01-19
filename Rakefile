task :default => :run

desc "Compile pegs4.pegjs"
task :compile do
  sh "pegjs pegs4.pegjs"
end

desc "Run and use the parser generated from pegs4.pegjs"
task :run => :compile do
  sh "node main.js"
end

desc "Parse pegs4.pegjs and leave it in an object called scheme"
task :browser do
  sh "pegjs -e scheme pegs4.pegjs"
end

desc "example of using chai"
task :chai do
  sh "pegjs pegs4.pegjs"
  sh "node pegs7_chai.js"
end

# brew install abcmidi
desc "yaps Takes an abc music file and converts it to PostScript"
task :ps do 
  sh "yaps twinkle.abc"
end

desc "abc2midi produces a .midi file from the abc source'"
task :midi do
  sh "abc2midi twinkle.abc"
end
