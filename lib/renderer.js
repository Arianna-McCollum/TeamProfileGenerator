const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole()=== "Manager")
        .map(manager => renderManager(manager))
    );
    html.push(...employees
        .filter(employee => employee.getRole()=== "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
    html.push(...employees
        .filter(employee => employee.getRole()=== "Intern")
        .map(intern => renderIntern(intern))
    );

    return renderIndex(html.join(""));

};

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceHolders(template, "name", manager.getName());
    template = replacePlaceHolders(template, "role", manager.getRole());
    template = replacePlaceHolders(template, "email", manager.getEmail());
    template = replacePlaceHolders(template, "id", manager.getId());
    template = replacePlaceHolders(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceHolders(template, "name", engineer.getName());
    template = replacePlaceHolders(template, "role", engineer.getRole());
    template = replacePlaceHolders(template, "email", engineer.getEmail());
    template = replacePlaceHolders(template, "id", engineer.getId());
    template = replacePlaceHolders(template, "github", engineer.getGithub());
    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceHolders(template, "name", intern.getName());
    template = replacePlaceHolders(template, "role", intern.getRole());
    template = replacePlaceHolders(template, "email", intern.getEmail());
    template = replacePlaceHolders(template, "id", intern.getId());
    template = replacePlaceHolders(template, "school", intern.getSchool());
    return template;
};

const renderIndex = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "index.html"), "utf8");
    return replacePlaceHolders(template, "team", html);
};

const replacePlaceHolders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + "}}", "gm");
    return template.replace(pattern, value);
}

module.exports = render;