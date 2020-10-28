angular
    .module("module.alumni.members")
    .component("alumni.members", {
        templateUrl: "members/members.template.html",
        controller: function MembersController() {
            var selfCtrl = this;
            selfCtrl.members = [
                {
                    firstName: "Vanessa",
                    lastName: "Dijon",
                    promo: 2019,
                    avatar: "https://joeschmoe.io/api/v1/female/vanessadijon.2019"
                },
                {
                    firstName: "Aiden",
                    lastName: "Pierce",
                    promo: 2020,
                    avatar: "https://joeschmoe.io/api/v1/male/aidenpierce.2020"
                },
                {
                    firstName: "Geralt",
                    lastName: "Deriv",
                    promo: 2020,
                    avatar: "https://joeschmoe.io/api/v1/male/geraltderiv.2020"
                },
                {
                    firstName: "John",
                    lastName: "Wick",
                    promo: 2020,
                    avatar: "https://joeschmoe.io/api/v1/male/johnwick.2020"
                }
            ];
        }
    })