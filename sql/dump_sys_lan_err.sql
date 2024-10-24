-- 在Navicat中执行以下语句，然后将查询结果复制到 app/sysdata/sys_lan_err.json 中;

SELECT concat("{\n", GROUP_CONCAT(concat("  \"", ModuleID, "\": \"", Word,"\"") separator ",\n"), "\n}") FROM `sys_lan_err`;