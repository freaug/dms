cd /Users/freaug/Desktop/rssTEst
curl -o data.xml http://cdn.511ga.org/RSS/dms.xml
xml2json -t xml2json -o data.json data.xml --strip_text --pretty --strip_namespace
