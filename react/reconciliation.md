# Reconciliation 调和



基于的两个假设：

1. two elements of different types will produce different trees. 两个不同类型的元素一定会形成两个不同的树
2. The developer can hint at which child elements may be stable across different renders with a key prop. 开发者指明了在UI更新中，哪两个元素可能是相同的。





## Diffing Algorithm

1. diffing 两个树时，react首先比较两个根元素。
2. 如果为两个不同种类的DOM，react会直接进行替换。
3. 如果为相同种类的DOM，react仅仅会修改不同的属性attribute
4. 如果为相同种类的DOM，react会继续递归的对子元素进行比较。