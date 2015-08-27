drop table IF EXISTS property_broker;
drop table IF EXISTS broker;
drop table IF EXISTS activity;
drop table IF EXISTS activity_type;
drop table IF EXISTS property;
drop table IF EXISTS contact;

CREATE TABLE IF NOT EXISTS broker (
    broker_id       SERIAL PRIMARY KEY,
    first_name      TEXT,
    last_name       TEXT,
    title           TEXT,
    address         TEXT,
    city            TEXT,
    state           TEXT,
    zip             TEXT,
    mobile_phone    TEXT,
    office_phone    TEXT,
    email           TEXT,
    pic             TEXT
  );

CREATE TABLE IF NOT EXISTS contact (
    contact_id      SERIAL PRIMARY KEY,
    first_name      TEXT,
    last_name       TEXT,
    address         TEXT,
    city            TEXT,
    state           TEXT,
    zip             TEXT,
    occupation      TEXT,
    mobile_phone    TEXT,
    home_phone      TEXT,
    email           TEXT,
    lead_source     TEXT,
    category        TEXT,
    notes           TEXT,
    member_since    DATE,
    pic             TEXT
  );

CREATE TABLE IF NOT EXISTS property (
    property_id     SERIAL PRIMARY KEY,
    address         TEXT,
    city            TEXT,
    state           TEXT,
    zip             TEXT,
    teaser          TEXT,
    description     TEXT,
    bedrooms        integer,
    bathrooms       integer,
    size            TEXT,
    lot_size        TEXT,
    pic             TEXT,
    status          integer,
    price           numeric DEFAULT 0,
    location        POINT
  );

CREATE TABLE IF NOT EXISTS activity_type (
    activity_type_id    SERIAL PRIMARY KEY,
    name                TEXT
  );

CREATE TABLE IF NOT EXISTS property_broker (
    property_id     integer NOT NULL REFERENCES property(property_id) ON DELETE CASCADE,
    broker_id       integer REFERENCES contact(contact_id) ON DELETE CASCADE,
    role            TEXT
  );

CREATE TABLE IF NOT EXISTS activity (
    activity_id         SERIAL PRIMARY KEY,
    property_id         integer NOT NULL REFERENCES property(property_id) ON DELETE CASCADE,
    contact_id          integer REFERENCES contact(contact_id) ON DELETE CASCADE,
    activity_type_id    integer NOT NULL REFERENCES activity_type(activity_type_id) ON DELETE CASCADE,
    comment             TEXT,
    price               numeric DEFAULT 0,
    activity_date       TIMESTAMP DEFAULT now()
  );


INSERT INTO BROKER (first_name, last_name, title, address, city, state, zip, mobile_phone, office_phone, email, pic) VALUES
('Caroline', 'Kingsley', 'Senior Broker', '1 Federal street', 'Boston', 'MA', '0218', '617-985-6955', '617-666-5555', 'caroline@lightningrealty.com', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg'),
('Brad', 'Moretti', 'Senior Broker', '1 Federal street', 'Boston', 'MA', '0218', '617-985-6955', '617-666-5555', 'brad@lightningrealty.com', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/brad_moretti.jpg');

INSERT INTO CONTACT (first_name, last_name, address, city, state, zip, occupation, mobile_phone, home_phone, email, lead_source, category, member_since, pic, notes) VALUES
('Tanya', 'Sharma', '18 Henry st', 'Cambridge', 'MA', '01742', 'Medical Doctor', '617-985-6955', '617-666-5555', 'tsharma@fakemail.com', 'Open House', 'Buyer', '2015/01/15', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/tanya_sharma.jpg', 'Lorem Ipsum'),
('Miriam', 'Aupont', '56 Broad st', 'Cambridge', 'MA', '01742', 'Software Engineer', '617-123-4567', '617-987-6543', 'maupont@fakemail.com', 'Open House', 'Buyer', '2015/01/15', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg', 'Lorem Ipsum'),
('Jonathan', 'Bradley', '52 Elm st', 'Boston', 'MA', '01742', 'Architect', '617-123-4567', '617-987-6543', 'jbradley@fakemail.com', 'Open House', 'Buyer', '2015/01/15', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg', 'Lorem Ipsum'),
('Anup', 'Gupta', '101 Massachusetts Avenue', 'Boston', 'MA', '01742', 'Software Engineer', '617-123-4567', '617-987-6543', 'agupta@fakemail.com', 'Open House', 'Buyer', '2015/01/15', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg', 'Lorem Ipsum'),
('Kenneth', 'Sato', '3 Oak st', 'Boston', 'MA', '01742', 'Software Engineer', '617-123-4567', '617-987-6543', 'ksato@fakemail.com', 'Open House', 'Buyer', '2015/01/15', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/kenneth_sato.jpg', 'Lorem Ipsum'),
('James', 'Kennedy', '56 Chestnut st', 'Boston', 'MA', '01742', 'Software Engineer', '617-123-4567', '617-987-6543', 'jkennedy@fakemail.com', 'Open House', 'Buyer', '2015/01/15', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/james_kennedy.jpg', 'Lorem Ipsum'),
('Amy', 'Taylor', '24 Belmont st', 'Boston', 'MA', '01742', 'Software Engineer', '617-123-4567', '617-987-6543', 'ataylor@fakemail.com', 'Open House', 'Buyer', '2015/01/15', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg', 'Lorem Ipsum'),
('Olivia', 'Green', '85 Boylston st', 'Boston', 'MA', '01742', 'Software Engineer', '617-123-4567', '617-987-6543', 'ogreen@fakemail.com', 'Open House', 'Buyer', '2015/01/15', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg', 'Lorem Ipsum'),
('Michael', 'Jones', '184 Gloucester st', 'Cambridge', 'MA', '01742', 'Medical Doctor', '617-985-6955', '617-666-5555', 'mjones@fakemail.com', 'Open House', 'Buyer', '2015/01/15', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg', 'Lorem Ipsum');

INSERT INTO property (address, city, state, zip, price, teaser, bedrooms, bathrooms, size, lot_size, location, pic, description) VALUES
('18 Henry st', 'Cambridge', 'MA', '01742', 975000, 'Stunning Victorian', 4, 3, 3800, 7, POINT(-71.11095, 42.35663), 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
('24 Pearl st', 'Cambridge', 'MA', '02420', 1200000, 'Ultimate Sophistication', 5, 4, 4000, 8, POINT(-71.108690, 42.359103), 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house02.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
('72 Francis st', 'Boston', 'MA', '02420', 825000, 'Modern City Living', 5, 4, 4000, 8, POINT(-71.106827, 42.335435), 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house03.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
('32 Prince st', 'Cambridge', 'MA', '02420', 930000, 'Stunning Colonial', 5, 4, 4000, 8, POINT(-71.110448, 42.360642), 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house04.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
('110 Baxter street', 'Boston', 'MA', '02420', 850000, 'Waterfront in the City', 3, 2, 4000, 8, POINT(-71.053943, 42.372486), 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house05.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
('448 Hanover st', 'Boston', 'MA', '02420', 725000, 'Quiet Retreat', 4, 2, 4000, 8, POINT(-71.052617, 42.366855), 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house06.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
('127 Endicott st', 'Boston', 'MA', '02420', 450000, 'City Living', 3, 1, 1500, 8, POINT(-71.057352, 42.365003), 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house07.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
('48 Brattle st', 'Cambridge', 'MA', '02420', 450000, 'Heart of Harvard Square', 5, 4, 2000, 8, POINT(-71.121653, 42.374117), 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
('121 Harborwalk', 'Boston', 'MA', '02420', 450000, 'Seaport District Retreat', 3, 3, 1500, 2, POINT(-71.049327, 42.356950), 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house09.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
('640 Harrison Ave', 'Boston', 'MA', '02420', 650000, 'City Living', 2, 2, 950, 0, POINT(-71.068781, 42.339892), 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');


INSERT INTO property_broker (property_id, broker_id) VALUES
(1,1),
(2,1),
(3,1),
(3,2),
(4,1),
(5,1),
(5,2),
(6,2),
(7,1),
(7,2),
(8,2),
(9,1),
(10,1),
(10,2);

INSERT INTO activity_type (name) VALUES
('Listed'),
('Open House'),
('Inquiry'),
('Price Reduction'),
('Offer');

INSERT INTO activity (property_id, contact_id, activity_type_id, activity_date, price, comment) VALUES
(1, null, 1, '2015/07/12', 975000, 'Officially on the market as of today'),
(2, null, 1, '2015/07/12', 1200000, 'Officially on the market as of today'),
(3, null, 1, '2015/07/12', 825000, 'Officially on the market as of today'),
(4, null, 1, '2015/07/12', 930000, 'Officially on the market as of today'),
(5, null, 1, '2015/07/12', 850000, 'Officially on the market as of today'),
(6, null, 1, '2015/07/12', 725000, 'Officially on the market as of today'),
(7, null, 1, '2015/07/12', 450000, 'Officially on the market as of today'),
(8, null, 1, '2015/07/12', 450000, 'Officially on the market as of today'),
(9, null, 1, '2015/07/12', 450000, 'Officially on the market as of today'),
(10, null, 1, '2015/07/12', 450000, 'Officially on the market as of today'),
(1, null, 2, '2015/07/19', 975000, 'First open house'),
(2, null, 2, '2015/07/20', 1200000, 'First open house'),
(3, null, 2, '2015/07/23', 825000, 'First open house'),
(4, null, 2, '2015/07/18', 930000, 'First open house'),
(5, null, 2, '2015/07/16', 850000, 'First open house'),
(6, null, 2, '2015/07/15', 725000, 'First open house'),
(7, null, 2, '2015/07/14', 450000, 'First open house'),
(8, null, 2, '2015/07/14', 450000, 'First open house'),
(9, null, 2, '2015/07/14', 450000, 'First open house'),
(10, null, 2, '2015/07/14', 450000, 'First open house'),

(1, 9, 3, '2015/07/25', 975000, 'Customer requested private showing'),
(2, 8, 3, '2015/07/26', 1200000, 'Customer requested private showing'),
(3, 7, 3, '2015/07/27', 825000, 'Customer requested private showing'),
(4, 6, 3, '2015/07/28', 930000, 'Customer requested private showing'),
(5, 4, 3, '2015/07/30', 850000, 'Customer requested private showing'),
(6, 2, 3, '2015/07/26', 725000, 'Customer requested private showing'),
(7, 1, 3, '2015/07/27', 450000, 'Customer requested private showing'),
(8, 6, 3, '2015/07/27', 450000, 'Customer requested private showing'),
(9, 3, 3, '2015/07/27', 450000, 'Customer requested private showing'),
(10, 2, 3, '2015/07/27', 450000, 'Customer requested private showing'),
(8, 5, 3, '2015/07/28', 450000, 'Customer requested private showing'),
(9, 8, 3, '2015/07/28', 450000, 'Customer requested private showing'),
(10, 7, 3, '2015/07/28', 450000, 'Customer requested private showing'),
(1, null, 4, '2015/07/25', 975000, 'Trying this new price'),
(2, null, 4, '2015/07/26', 1200000, 'Trying this new price'),
(3, null, 4, '2015/07/27', 825000, 'Trying this new price'),
(4, null, 4, '2015/07/28', 930000, 'Trying this new price'),
(5, null, 4, '2015/07/30', 850000, 'Trying this new price'),
(6, null, 4, '2015/07/26', 725000, 'Trying this new price'),
(7, null, 4, '2015/07/27', 450000, 'Trying this new price'),
(8, null, 4, '2015/07/27', 450000, 'Trying this new price'),
(1, 8, 2, '2015/08/02', 975000, 'Second Open House'),
(2, 6, 2, '2015/08/03', 1200000, 'Second Open House'),
(3, 1, 2, '2015/08/04', 825000, 'Second Open House'),
(4, 4, 2, '2015/08/05', 930000, 'Second Open House'),
(5, 2, 2, '2015/08/06', 850000, 'Second Open House'),
(6, 7, 2, '2015/08/10', 725000, 'Second Open House'),
(7, 9, 2, '2015/08/11', 450000, 'Second Open House'),
(1, 7, 5, '2015/08/12', 975000, 'Offer by email'),
(2, 6, 5, '2015/08/14', 1200000, 'Offer by email'),
(3, 5, 5, '2015/08/16', 825000, 'Offer by email'),
(4, 3, 3, '2015/08/18', 930000, 'Customer requested private showing'),
(5, 8, 3, '2015/08/12', 850000, 'Customer requested private showing'),
(6, 2, 3, '2015/08/14', 725000, 'Customer requested private showing'),
(7, 1, 3, '2015/08/16', 450000, 'Customer requested private showing');
