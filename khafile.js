const project = new Project('MousePSD');

project.addSources('Sources');
project.icon = 'icon.png';

project.addDefine('kha_html5_disable_automatic_size_adjust');

resolve(project);
