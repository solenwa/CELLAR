# The Cellar

An app to help wine lovers manage their cellars and learn more about wine in general.

## User Stories

- **404 Page:** As an/anon user I can see a 404 page if I try to reach a page that does not exist
- **Home Page:** As an/anon user I am welcomed on a landing page that states the website's purpose
- **Wine List:** As an/anon user I can see a page listing all wines in the database
- **Wine Detail:** As an/anon user I can see a page with all details concerning one specific wine

## Frontend

| Path                    | Component                      | Permissions             | Behavior                                                    |
| ----------------------- | ------------------------------ | ----------------------- | ----------------------------------------------------------- |
| `/*`                    | Header, Footer, Errorpage      | public `<Route>`        | Error Page                                                  |
| `/`                     | Header, Footer, Homepage       | public `<Route>`        | Home Page                                                   |
| `/allwines`             | Header, Footer, WinesList      | public `<Route>`        | Wine List                                                   |
| `/allwines/:id`         | Header, Footer, WinesDetail    | public `<Route>`        | Wine Detail                                                 |

