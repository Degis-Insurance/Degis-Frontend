for i in `find /Users/ZZ/01_blockchain/degisABIs | grep -Ff 20211125/list` 
do
	cp $i .
done 
cp /Users/ZZ/01_blockchain/degisABIs/flightdelay/PolicyToken.json FL_PolicyToken.json
cp /Users/ZZ/01_blockchain/degisABIs/flightdelay/IPolicyToken.json FL_IPolicyToken.json
cp /Users/ZZ/01_blockchain/degisABIs//naughty-price/PolicyToken.json NP_PolicyToken.json 
cp /Users/ZZ/01_blockchain/degisABIs//naughty-price/IPolicyToken.json NP_IPolicyToken.json
