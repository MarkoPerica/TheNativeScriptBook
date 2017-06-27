"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./views/home/home.component");
var list_component_1 = require("./views/list/list.component");
var about_component_1 = require("./views/about/about.component");
var detail_component_1 = require("./views/detail/detail.component");
exports.routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "about", component: about_component_1.AboutComponent },
    { path: "detail/:id", component: detail_component_1.DetailComponent }
];
exports.navigatableComponents = [
    home_component_1.HomeComponent,
    list_component_1.ListComponent,
    about_component_1.AboutComponent,
    detail_component_1.DetailComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsaUVBQStEO0FBQy9ELG9FQUFrRTtBQUVyRCxRQUFBLE1BQU0sR0FBUTtJQUN6QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDdEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0NBQ25ELENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFRO0lBQ3hDLDhCQUFhO0lBQ2IsOEJBQWE7SUFDYixnQ0FBYztJQUNkLGtDQUFlO0NBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvYWJvdXQvYWJvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBhbnkgPSBbIFxuICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LCBcbiAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogXCJsaXN0XCIsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCB9LFxuICB7IHBhdGg6IFwiYWJvdXRcIiwgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9ICxcbiAgeyBwYXRoOiBcImRldGFpbC86aWRcIiwgY29tcG9uZW50OiBEZXRhaWxDb21wb25lbnQgfSBcbl07XG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHM6IGFueSA9IFsgXG4gIEhvbWVDb21wb25lbnQsIFxuICBMaXN0Q29tcG9uZW50LCBcbiAgQWJvdXRDb21wb25lbnQsXG4gIERldGFpbENvbXBvbmVudFxuXTsiXX0=