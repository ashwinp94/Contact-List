(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const contact = {
  contactBuilder(contactObject) {
    let contactArticle = document.createElement("article");
    let contactName = document.createElement("h3");
    contactName.textContent = contactObject.name;
    let contactNumber = document.createElement("section");
    contactNumber.textContent = contactObject.number;
    let contactAddress = document.createElement("section");
    contactAddress.textContent = contactObject.address;
    contactArticle.appendChild(contactName);
    contactArticle.appendChild(contactNumber);
    contactArticle.appendChild(contactAddress);
    return contactArticle;
  }

};
var _default = contact;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const contactCollection = {
  getAllContacts() {
    return fetch("http://localhost:8088/contacts").then(response => response.json());
  },

  postAllContacts(newContactToSave) {
    fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContactToSave)
    });
  }

};
var _default = contactCollection;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContactCollection = _interopRequireDefault(require("./ContactCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contactForm = {
  createAndAppendForm() {
    let formHeader = document.createElement("h3");
    formHeader.textContent = "Add to your contacts";
    let contactNameField = document.createElement("fieldset");
    let contactNameLabel = document.createElement("label");
    contactNameLabel.textContent = "Name";
    contactNameLabel.setAttribute("for", "contact-name");
    let contactNameInput = document.createElement("input");
    contactNameInput.setAttribute("id", "contact-name");
    contactNameInput.setAttribute("name", "contact-name");
    contactNameField.appendChild(contactNameLabel);
    contactNameField.appendChild(contactNameInput);
    let contactNumberField = document.createElement("fieldset");
    let contactNumberLabel = document.createElement("label");
    contactNumberLabel.textContent = "Phone Number";
    contactNumberLabel.setAttribute("for", "contact-number");
    let contactNumberInput = document.createElement("input");
    contactNumberInput.setAttribute("id", "contact-number");
    contactNumberInput.setAttribute("name", "contact-number");
    contactNumberField.appendChild(contactNumberLabel);
    contactNumberField.appendChild(contactNumberInput);
    let contactAddressField = document.createElement("fieldset");
    let contactAddressLabel = document.createElement("label");
    contactAddressLabel.textContent = "Address";
    contactAddressLabel.setAttribute("for", "contact-address");
    let contactAddressInput = document.createElement("input");
    contactAddressInput.setAttribute("id", "contact-address");
    contactAddressInput.setAttribute("name", "contact-address");
    contactAddressField.appendChild(contactAddressLabel);
    contactAddressField.appendChild(contactAddressInput);
    let submitButton = document.createElement("button");
    submitButton.textContent = "Add Contact";
    submitButton.setAttribute("class", "contact-save");
    submitButton.addEventListener("click", this.handleAddNewFood);
    let contactFormFragment = document.createDocumentFragment();
    contactFormFragment.appendChild(formHeader);
    contactFormFragment.appendChild(contactNameField);
    contactFormFragment.appendChild(contactNumberField);
    contactFormFragment.appendChild(contactAddressField);
    contactFormFragment.appendChild(submitButton);
    let formArticle = document.querySelector(".form");
    formArticle.appendChild(contactFormFragment);
  },

  handleAddNewFood(event) {
    let inputContactName = document.querySelector("#contact-name").value;
    let inputContactNumber = document.querySelector("#contact-number").value;
    let inputContactAddress = document.querySelector("#contact-address").value;
    let newContact = {
      name: inputContactName,
      number: inputContactNumber,
      address: inputContactAddress
    };

    _ContactCollection.default.handleAddNewFood(newContact);
  }

};
var _default = contactForm;
exports.default = _default;

},{"./ContactCollection":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContactCollection = _interopRequireDefault(require("./ContactCollection"));

var _Contact = _interopRequireDefault(require("./Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contactList = {
  contactify() {
    _ContactCollection.default.getAllContacts().then(allContacts => {
      let contactDocFragment = document.createDocumentFragment();
      allContacts.forEach(contactItem => {
        let contactHTML = _Contact.default.contactBuilder(contactItem);

        contactDocFragment.appendChild(contactHTML);
      });
      let outputArticle = document.querySelector(".output");
      outputArticle.appendChild(contactDocFragment);
    });
  }

};
var _default = contactList;
exports.default = _default;

},{"./Contact":1,"./ContactCollection":2}],5:[function(require,module,exports){
"use strict";

var _ContactList = _interopRequireDefault(require("./ContactList"));

var _ContactForm = _interopRequireDefault(require("./ContactForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ContactList.default.contactify();

_ContactForm.default.createAndAppendForm();

},{"./ContactForm":3,"./ContactList":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL0NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9Db250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvQ29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQSxNQUFNLE9BQU8sR0FBRztBQUNaLEVBQUEsY0FBYyxDQUFDLGFBQUQsRUFBZTtBQUN6QixRQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFyQjtBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixHQUEwQixhQUFhLENBQUMsSUFBeEM7QUFFQSxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsR0FBNEIsYUFBYSxDQUFDLE1BQTFDO0FBRUEsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBckI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLEdBQTZCLGFBQWEsQ0FBQyxPQUEzQztBQUVBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsV0FBM0I7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLGFBQTNCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixjQUEzQjtBQUVBLFdBQU8sY0FBUDtBQUNIOztBQWxCVyxDQUFoQjtlQXFCZSxPOzs7Ozs7Ozs7O0FDckJmLE1BQU0saUJBQWlCLEdBQUc7QUFFdEIsRUFBQSxjQUFjLEdBQUc7QUFDYixXQUFPLEtBQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ04sSUFETSxDQUNELFFBQVEsSUFBSSxR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Ozs7O0FBRUEsTUFBTSxXQUFXLEdBQUc7QUFDaEIsRUFBQSxVQUFVLEdBQUU7QUFDUiwrQkFBa0IsY0FBbEIsR0FDQyxJQURELENBQ00sV0FBVyxJQUFHO0FBQ2hCLFVBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQXpCO0FBQ0EsTUFBQSxXQUFXLENBQUMsT0FBWixDQUFvQixXQUFXLElBQUk7QUFDL0IsWUFBSSxXQUFXLEdBQUcsaUJBQVEsY0FBUixDQUF1QixXQUF2QixDQUFsQjs7QUFDQSxRQUFBLGtCQUFrQixDQUFDLFdBQW5CLENBQStCLFdBQS9CO0FBQ0gsT0FIRDtBQUlBLFVBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXBCO0FBQ0EsTUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixrQkFBMUI7QUFFSCxLQVZEO0FBV0g7O0FBYmUsQ0FBcEI7ZUFnQmUsVzs7Ozs7O0FDbkJmOztBQUNBOzs7O0FBRUEscUJBQVksVUFBWjs7QUFDQSxxQkFBWSxtQkFBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGNvbnRhY3QgPSB7XHJcbiAgICBjb250YWN0QnVpbGRlcihjb250YWN0T2JqZWN0KXtcclxuICAgICAgICBsZXQgY29udGFjdEFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICAgICAgY29udGFjdE5hbWUudGV4dENvbnRlbnQgPSBjb250YWN0T2JqZWN0Lm5hbWU7XHJcblxyXG4gICAgICAgIGxldCBjb250YWN0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcclxuICAgICAgICBjb250YWN0TnVtYmVyLnRleHRDb250ZW50ID0gY29udGFjdE9iamVjdC5udW1iZXI7XHJcblxyXG4gICAgICAgIGxldCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXHJcbiAgICAgICAgY29udGFjdEFkZHJlc3MudGV4dENvbnRlbnQgPSBjb250YWN0T2JqZWN0LmFkZHJlc3NcclxuXHJcbiAgICAgICAgY29udGFjdEFydGljbGUuYXBwZW5kQ2hpbGQoY29udGFjdE5hbWUpXHJcbiAgICAgICAgY29udGFjdEFydGljbGUuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlcilcclxuICAgICAgICBjb250YWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcylcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhY3RBcnRpY2xlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3QiLCJjb25zdCBjb250YWN0Q29sbGVjdGlvbiA9IHtcclxuXHJcbiAgICBnZXRBbGxDb250YWN0cyAoKXtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdHNcIilcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICB9LFxyXG4gICAgcG9zdEFsbENvbnRhY3RzKG5ld0NvbnRhY3RUb1NhdmUpe1xyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbnRhY3RzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3Q29udGFjdFRvU2F2ZSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Q29sbGVjdGlvbiIsImltcG9ydCBjb250YWN0Q29sbGVjdGlvbiBmcm9tIFwiLi9Db250YWN0Q29sbGVjdGlvblwiXHJcblxyXG5cclxuY29uc3QgY29udGFjdEZvcm0gPSB7XHJcbiAgICBjcmVhdGVBbmRBcHBlbmRGb3JtKCkge1xyXG4gICAgICAgIGxldCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICAgICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIHRvIHlvdXIgY29udGFjdHNcIlxyXG5cclxuICAgICAgICBsZXQgY29udGFjdE5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKVxyXG5cclxuICAgICAgICBsZXQgY29udGFjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgICAgIGNvbnRhY3ROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWVcIlxyXG4gICAgICAgIGNvbnRhY3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29udGFjdC1uYW1lXCIpXHJcbiAgICAgICAgbGV0IGNvbnRhY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICBjb250YWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdC1uYW1lXCIpXHJcbiAgICAgICAgY29udGFjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY29udGFjdC1uYW1lXCIpXHJcblxyXG4gICAgICAgIGNvbnRhY3ROYW1lRmllbGQuYXBwZW5kQ2hpbGQoY29udGFjdE5hbWVMYWJlbClcclxuICAgICAgICBjb250YWN0TmFtZUZpZWxkLmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lSW5wdXQpXHJcblxyXG4gICAgICAgIGxldCBjb250YWN0TnVtYmVyRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIilcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhY3ROdW1iZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgICAgIGNvbnRhY3ROdW1iZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiUGhvbmUgTnVtYmVyXCJcclxuICAgICAgICBjb250YWN0TnVtYmVyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29udGFjdC1udW1iZXJcIilcclxuICAgICAgICBsZXQgY29udGFjdE51bWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgY29udGFjdE51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdC1udW1iZXJcIilcclxuICAgICAgICBjb250YWN0TnVtYmVySW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbnRhY3QtbnVtYmVyXCIpXHJcblxyXG4gICAgICAgIGNvbnRhY3ROdW1iZXJGaWVsZC5hcHBlbmRDaGlsZChjb250YWN0TnVtYmVyTGFiZWwpXHJcbiAgICAgICAgY29udGFjdE51bWJlckZpZWxkLmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXJJbnB1dClcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhY3RBZGRyZXNzRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIilcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhY3RBZGRyZXNzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgICAgICBjb250YWN0QWRkcmVzc0xhYmVsLnRleHRDb250ZW50ID0gXCJBZGRyZXNzXCJcclxuICAgICAgICBjb250YWN0QWRkcmVzc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbnRhY3QtYWRkcmVzc1wiKVxyXG4gICAgICAgIGxldCBjb250YWN0QWRkcmVzc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgY29udGFjdEFkZHJlc3NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY29udGFjdC1hZGRyZXNzXCIpXHJcbiAgICAgICAgY29udGFjdEFkZHJlc3NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJjb250YWN0LWFkZHJlc3NcIilcclxuXHJcbiAgICAgICAgY29udGFjdEFkZHJlc3NGaWVsZC5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzc0xhYmVsKVxyXG4gICAgICAgIGNvbnRhY3RBZGRyZXNzRmllbGQuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3NJbnB1dClcclxuXHJcbiAgICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBDb250YWN0XCJcclxuICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWN0LXNhdmVcIilcclxuXHJcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUFkZE5ld0Zvb2QpXHJcblxyXG4gICAgICAgIGxldCBjb250YWN0Rm9ybUZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXHJcbiAgICAgICAgY29udGFjdEZvcm1GcmFnbWVudC5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKVxyXG4gICAgICAgIGNvbnRhY3RGb3JtRnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29udGFjdE5hbWVGaWVsZClcclxuICAgICAgICBjb250YWN0Rm9ybUZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXJGaWVsZClcclxuICAgICAgICBjb250YWN0Rm9ybUZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RBZGRyZXNzRmllbGQpXHJcbiAgICAgICAgY29udGFjdEZvcm1GcmFnbWVudC5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pXHJcblxyXG4gICAgICAgIGxldCBmb3JtQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKVxyXG4gICAgICAgIGZvcm1BcnRpY2xlLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtRnJhZ21lbnQpXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlQWRkTmV3Rm9vZCAoZXZlbnQpIHtcclxuICAgICAgICBsZXQgaW5wdXRDb250YWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1uYW1lXCIpLnZhbHVlXHJcbiAgICAgICAgbGV0IGlucHV0Q29udGFjdE51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1udW1iZXJcIikudmFsdWVcclxuICAgICAgICBsZXQgaW5wdXRDb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1hZGRyZXNzXCIpLnZhbHVlXHJcblxyXG4gICAgICAgIGxldCBuZXdDb250YWN0ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBpbnB1dENvbnRhY3ROYW1lLFxyXG4gICAgICAgICAgICBudW1iZXI6IGlucHV0Q29udGFjdE51bWJlcixcclxuICAgICAgICAgICAgYWRkcmVzczogaW5wdXRDb250YWN0QWRkcmVzcyxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGFjdENvbGxlY3Rpb24uaGFuZGxlQWRkTmV3Rm9vZChuZXdDb250YWN0KVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdEZvcm0iLCJpbXBvcnQgY29udGFjdENvbGxlY3Rpb24gZnJvbSBcIi4vQ29udGFjdENvbGxlY3Rpb25cIlxyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9Db250YWN0XCJcclxuXHJcbmNvbnN0IGNvbnRhY3RMaXN0ID0ge1xyXG4gICAgY29udGFjdGlmeSgpe1xyXG4gICAgICAgIGNvbnRhY3RDb2xsZWN0aW9uLmdldEFsbENvbnRhY3RzKClcclxuICAgICAgICAudGhlbihhbGxDb250YWN0cyA9PntcclxuICAgICAgICAgICAgbGV0IGNvbnRhY3REb2NGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxyXG4gICAgICAgICAgICBhbGxDb250YWN0cy5mb3JFYWNoKGNvbnRhY3RJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250YWN0SFRNTCA9IGNvbnRhY3QuY29udGFjdEJ1aWxkZXIoY29udGFjdEl0ZW0pXHJcbiAgICAgICAgICAgICAgICBjb250YWN0RG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29udGFjdEhUTUwpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpXHJcbiAgICAgICAgICAgIG91dHB1dEFydGljbGUuYXBwZW5kQ2hpbGQoY29udGFjdERvY0ZyYWdtZW50KVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0TGlzdCIsImltcG9ydCBjb250YWN0TGlzdCBmcm9tIFwiLi9Db250YWN0TGlzdFwiXHJcbmltcG9ydCBjb250YWN0Rm9ybSBmcm9tIFwiLi9Db250YWN0Rm9ybVwiXHJcblxyXG5jb250YWN0TGlzdC5jb250YWN0aWZ5KClcclxuY29udGFjdEZvcm0uY3JlYXRlQW5kQXBwZW5kRm9ybSgpIl19
