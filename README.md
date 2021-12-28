<p align="center">
    <img alt="oss image" src="./imgs/unityclean.png" height="200px">
</p>
                     
<h1 align="center">Core Unity Code Base</h1>

> Welcome to unity a fair, free and forward facing framework for human interaction on the metaverse and beyond.

List of available languages:

- [English](./README.md)
- [Español - Coming Soon](./README-es.md)
- [简体中文 - Coming Soon](./README-zh-cn.md)

A language is missing? Want to improve this cheat sheet? [Contributions are welcome](./CONTRIBUTING.md)!

## 1. 🎢 Core Principles

1. Open, transparent and public functionality.
2. User owns and controls all privacy and data where feasible.
3. unity will not sell or otherwise monetize private data to 3rd parties.
4. All communication on the platform is public and accessible by anybody.
5. All connections and entity relationships are pubic.
6. We adhere to the core GDPR principles.
7. We are platform agnostic, though optimized for VR/AR
8. All users must use their real name and have some level of data verification which will publicly be shown.
9. We shall always endeavor to use a carrot rather than a stick when dealing with community behavior.
10. The rule of three applies to decision making.
11. In worse case scenarios the principle of fruit of the poisonous tree will be applied to downstream relationships.

## 2. 📘 Technical Stack:

1. VM : AWS EC2
2. DNS : AWS Route 53
3. Storage : AWS S3
4. CDN : Cloud flare
5. Core Language : Javascript
6. Framework : Node.js
7. Database : Mongo
8. Security Protocol : HTTPS
9. Blockchain : Etherium Fork, Proof of Stake

## 3. 🤝 Coding Principles

1. DRY
2. KISS
3. SRP
4. LSP
5. YAGNI
6. Amazing Commenting
7. Be kind to yourself and others.
8. Mistakes happen, identify, take responsibility, fix and move on.

## 4.👌 Product Principles

1. Multilingual(Automated)
2. Accessable
3. Responsive
4. Interactive
5. Realtime
6. Communication Stream Agnostic
7. Encrypt Everything
8. Always Usercentric

## ❤️ Contributors

Coming Soon

Thanks to https://github.com/zenika-open-source/promote-open-source-project for insperation.

<!--             _ _ -->
<!-- /\ /\ _ __ (_) |_ _   _ -->
<!--/ / \ \ '_ \| | __| | | |-->
<!--\ \_/ / | | | | |_| |_| |-->
<!-- \___/|_| |_|_|\__|\__, |-->
<!--                   |___/ -->

federation

db.createUser(
{
user: "fed4rationa@!&",
pwd: "#!afAhuip!abc",
"roles" : [
{
"role" : "userAdminAnyDatabase",
"db" : "admin"
},
"readWriteAnyDatabase"
]
}
)

FEDERATION DATABASE ACCESS

db.createUser({
user: "federation",
pwd: "iopqzan123187abza",
roles: [
{ role: "readWrite", db: "federation" }
]
})

db.system.users.update({"user":"fed4rationa@!&"}, {$set:{"user":"federationalziqw"}})

db.grantRolesToUser('admin', [{ role: 'root', db: 'admin' }])

mongo -u fed4rationa@\!\& -p --authenticationDatabase admin

sudo service mongod restart

sudo service mongod start

sudo service mongod stop

sudo systemctl start mongod

sudo systemctl stop mongod

sudo systemctl status mongod

mongo --port 27017 -u "admin" -p "federation2731" --authenticationDatabase "federation"

## mongo cant start service

sudo rm -rf /tmp/mongodb-27017.sock
sudo service mongod start

## build server

docker build \
 -f services/node-server-users/Dockerfile.prod \
 -t 719620951087.dkr.ecr.us-west-1.amazonaws.com/federationcore-server:staging \
 ./services/node-server-users/ --platform linux/amd64

docker push 719620951087.dkr.ecr.us-west-1.amazonaws.com/federationcore-server:staging

## build client

docker build \
 -f client/Dockerfile.prod \
 -t 719620951087.dkr.ecr.us-west-1.amazonaws.com/federationcore-client:staging \
 --build-arg NODE_ENV=production \
 ./client --platform linux/amd64


docker push 719620951087.dkr.ecr.us-west-1.amazonaws.com/federationcore-client:staging

